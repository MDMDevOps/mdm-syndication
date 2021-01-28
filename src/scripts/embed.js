import Embed from './includes/embed.js';
/**
 * Script to query and embed content
 */
const _initEmbeds = () => {
	/**
	 * divs that need content embedded
	 */
	let embeddable = document.getElementsByClassName( 'mdm-syndicated-embed' );
	/**
	 * Init each
	 */
	for( let i = 0; i < embeddable.length; i++ ) {
		new Embed( embeddable[i] );
	}
}
document.addEventListener( 'DOMContentLoaded', _initEmbeds, false );