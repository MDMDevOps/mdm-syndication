jQuery( function( $ ) {
	'use strict';

	let resizeTimeout;

	let instance = false;

	/**
	 * Ignore resize events as long as an actualResizeHandler execution is in the queue
	 * Used to boost performance of resize events
	 * The actualResizeHandler will execute at a rate of 15fps
	 */
	const _resize = () => {
		if( !resizeTimeout ) {
			resizeTimeout = setTimeout( () => {
				resizeTimeout = null;
				_report();
			}, 66 );
		}
	};

	/**
	 * Report resize to top window
	 */
	const _report = () => {
		top.postMessage( { height : $('body').height(), trigger : '_resize', reporter : 'd054e23c06f84723f8e5bbc8eccb308b', instance : instance }, '*' );
	};

	/**
	 * If this is embedded content
	 */
	if( top !== window ) {
		/**
		 * get the instance
		 */
		instance = $( 'body' ).data( 'instance' );
		/**
		 * Set links to open in new tab
		 */
		$( 'a' ).attr( 'target','_blank' );
		/**
		 * Bind resize events
		 */
		$( window ).on( 'resize', _resize );
		/**
		 * Do initial resize
		 */
		_report();
		/**
		 * set a timeout to run in case events don't happen as expected
		 */
		setTimeout( () => {
			_report();
		}, 1000 );
	}

});