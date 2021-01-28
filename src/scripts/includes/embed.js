export default function( element ) {

	let xhr, embed, instance = 0;

	const requestListener = ( event ) => {

		try {

			let response = JSON.parse( xhr.responseText );

			window.addEventListener( 'message', _receive, false );

			instance = response.instance;

			element.innerHTML = response.content;

			embed = getElementsByTagName( 'embed' );

		}
		catch( error ) {
			// nothing to do here right now
		}
	}

	const _receive = ( message ) => {
		/**
		 * If it doesn't come from our plugin, we can bail
		 */
		if ( message.data.reporter !== 'd054e23c06f84723f8e5bbc8eccb308b' ) {
			return false;
		}
		/**
		 * if it's not this exact instance, we can bail
		 */
		if ( instance !== message.data.instance ) {
			return false;
		}
		/**
		 * If we don't have a height, we can bail
		 */
		if ( message.data.height === undefined ) {
			return false;
		}
		/**
		 * Get the frame height reported by source
		 */
		let frameHeight = parseInt( message.data.height );
		/**
		 * If we have a number, do the resize
		 */
		if( !isNaN( frameHeight ) ) {
			element.style.height = frameHeight + 'px';
		}

	}

	const _init = () => {
		/**
		 * Get the source url
		 */
		let src = element.dataset.src;
		/**
		 * Get the id
		 */
		let id = element.dataset.id;
		/**
		 * Make sure we have both
		 */
		if ( src === undefined || id === undefined ) {
			return false;
		}
		/**
		 * Create a new request object
		 */
		xhr = new XMLHttpRequest();
		/**
		 * Add request listener
		 */
		xhr.addEventListener( 'load', requestListener );
		/**
		 * Open the request
		 */
		xhr.open( 'GET', src + '/wp-json/syndication/v2/embed/' + id );
		/**
		 * Send the request
		 */
		xhr.send();
	}

	return _init();

}