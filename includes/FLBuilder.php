<?php

/**
 * The plugin file that controls the flbuilder function
 * @link    https://www.midwestfamilymadison.com
 * @since   1.0.0
 * @package my_plugin_name
 */

namespace mdm\syndication;

class FLBuilder extends Framework {
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
		$this->subscriber->addAction( 'init', [$this, 'registerModules'] );
	}

	/**
	 * Register flbuilder modules
	 */
	public function registerModules() {

		if( !class_exists( 'FLBuilder' ) ) {
			return false;
		}

		flbuilder\embed\MDMContentSyndicationEmbed::register();

	}
}