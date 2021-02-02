<?php

/**
 * The plugin file that controls the frontend functions
 * @link    https://www.midwestfamilymadison.com
 * @since   1.0.0
 * @package mdm_syndication
 */

namespace mdm\syndication;

class FrontEnd extends Framework {
	/**
	 * Register actions
	 *
	 * Uses the subscriber class to ensure only actions of this instance are added
	 * and the instance can be referenced via subscriber
	 *
	 * @since 1.0.0
	 * @see  https://developer.wordpress.org/reference/functions/add_action/
	 */
	public function addActions() {
		$this->subscriber->addAction( 'wp_enqueue_scripts', [$this, 'enqueueScripts'] );
		$this->subscriber->addAction( 'wp_enqueue_scripts', [$this, 'enqueueStyles'] );
		$this->subscriber->addAction( 'rest_api_init', [$this, 'registerRestRoute'] );

	}
	/**
	 * Register filters
	 *
	 * Uses the subscriber class to ensure only actions of this instance are added
	 * and the instance can be referenced via subscriber
	 *
	 * @since 1.0.0
	 * @see  https://developer.wordpress.org/reference/functions/add_filter/
	 */
	public function addFilters() {
		$this->subscriber->addFilter( 'template_include', [$this, 'templateOverride'], 9999, 1 );
		$this->subscriber->addFilter( 'fl_builder_register_template_post_type_args', [$this, 'flbuilderTemplateEmbeds'] );
	}
	/**
	 * Register shortcodes
	 *
	 * Uses the subscriber class to ensure only actions of this instance are added
	 * and the instance can be referenced via subscriber
	 *
	 * @since 1.0.0
	 */
	public function addShortcodes() {
		$this->subscriber->addShortcode( 'mdm_syndication_embed', [$this, 'shortcodeCallback'] );
	}
	/**
	 * Register the rest routes
	 */
	public function registerRestRoute() {
		register_rest_route( 'syndication/v2', '/embed/(?P<id>\d+)', array(
			'methods' => 'GET',
			'callback' => [$this, 'getEmbed'],
			'permission_callback' => '__return_true',
		) );
		register_rest_route( 'syndication/v2', '/scripts/(?P<js>[a-zA-Z0-9-]+)', array(
			'methods' => 'GET',
			'callback' => [$this, 'redirectJSRequest'],
			'permission_callback' => '__return_true',
		) );
	}
	/**
	 * Use json url as script url
	 */
	public function redirectJSRequest( \WP_REST_Request $request ) {
		/**
		 * Get script name
		 */
		$js = $request->get_param( 'js' );
		/**
		 * Make sure we have a script
		 */
		if ( empty( $js ) ) {
			exit;
		}
		/**
		 * make sure file exist
		 */
		if ( !file_exists( $this->path( "assets/js/{$js}.min.js" ) ) ) {
			exit;
		}
		/**
		 * redirect
		 */
		wp_redirect( $this->url( "assets/js/{$js}.min.js" ) );

		exit;
	}
	/**
	 * Get the embed
	 */
	public function getEmbed( \WP_REST_Request $request ) {

		$id = $request->get_param( 'id' );

		$instance_id = md5( get_home_url() . rand( 100, 10000 ) );

		$embed = sprintf( '<embed type="text/html" src="%s?embedded=1&instance=%s" width="100%%" height="100%%">', get_the_permalink($id), $instance_id );

		$response = new \WP_REST_Response( [ 'content' => $embed, 'type' => 'embed', 'instance' => $instance_id ] );

		return $response;
	}
	/**
	 * Create blank frontend template
	 */
	function templateOverride( $template ){

		if ( isset( $_GET['embedded'] ) && $_GET['embedded'] == 1 ) {
			$template = $this->path( 'assets/templates/single.php' );
		}
		return $template;
	}
	/**
	 * Stop FL builder templates from redirecting to the homepage
	 */
	function flbuilderTemplateEmbeds( $args ) {
		if ( isset( $_GET['embedded'] ) && $_GET['embedded'] == 1 ) {
			$args['public'] = true;
			$args['publicly_queryable'] = true;
		}
		return $args;
	}

	/**
	 * Register the javascript
	 *
	 * @since 1.0.0
	 */
	public function enqueueScripts() {
		/**
		 * We can add the embed script to our own site, for embedding from other sites
		 */
		wp_enqueue_script( __NAMESPACE__ . '\embed', $this->url( 'assets/js/embed.min.js' ), [], VERSION, true );
		/**
		 * If we are embedding we can add the frame script
		 */
		if ( isset( $_GET['embedded'] ) && $_GET['embedded'] == 1 ) {
			wp_enqueue_script( __NAMESPACE__ . '\frame', $this->url( 'assets/js/frame.min.js' ), ['jquery'], VERSION, true );
		}
	}

	/**
	 * Register the css
	 *
	 * @since 1.0.0
	 */
	public function enqueueStyles() {

	}

	public function shortcodeCallback( $atts = '' ) {

		$atts = shortcode_atts( [ 'src' => '', 'id' => '' ], $atts, 'mdm_syndication_embed' );

		if ( empty( $atts['src'] ) || empty( $atts['id'] ) ) {
			return false;
		}

		return sprintf( '<div class="mdm-syndicated-embed" data-src="%s" data-id="%s"></div>', esc_url( $atts['src'] ), intval( $atts['id'] ) );
	}
}