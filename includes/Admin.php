<?php

/**
 * The plugin file that controls the admin functions
 * @link    https://www.midwestfamilymadison.com
 * @since   1.0.0
 * @package my_plugin_name
 */

namespace mdm\syndication;

class Admin extends Framework {
	/**
	 * Register actions
	 *
	 * Uses the subscriber class to ensure only actions of this instance are added
	 * and the instance can be referenced via subscriber
	 *
	 * @since 1.0.0
	 * @see  https://developer.wordpress.org/reference/functions/add_filter/
	 */
	public function addActions() {
		$this->subscriber->addAction( 'add_meta_boxes', [$this, 'addMetaBox'] );
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
		// $this->subscriber->addFilter( 'mdm_syndication_post_fields', [$this, 'addCustomFields'] );
	}
	/**
	 * Helper function to safely decode json files
	 */
	private function decodeJson( $content ) {

		$content = preg_replace( '/[\x00-\x1F\x80-\xFF]/', '', $content );

		return json_decode( $content, true );
	}


	public function addMetaBox() {
		add_meta_box(
			'mdm_syndication_message',
			'Embedding Content Remotely',
			[$this, 'metaBoxCallback'],
			['page', 'post', 'fl-builder-template', 'astra-advanced-hook'],
			'advanced',
			'default'
		);
	}

	public function metaBoxCallback() {
		echo '<div style="padding-bottom: 20px">';
		echo '<p><strong>Step 1: Enqueue Script</strong></p>';
		echo '<p>Add the following javascript to the header or footer of the site you would like to embed this content. <strong>Note:</strong> This only needs to be added to the site once, regardless of how many items are being shared.</p>';
		echo '<p><code>' . htmlspecialchars( sprintf( '<script src="%s"></script>', get_home_url( null, 'wp-json/syndication/v2/scripts/embed' ) ) ) . '</code></p>';
		echo '<p><strong>Step 2: Place DIV</strong></p>';
		echo '<p>Place the following code where you want the embed to appear<p>';
		echo '<p><code>' . htmlspecialchars( sprintf( '<div class="mdm-syndicated-embed" data-src="%s" data-id="%s"></div>', get_home_url(), $_GET['post'] ) ) . '</code></p>';
		echo '</div>';
	}
}