<?php

if ( !empty( $settings->src_url ) && !empty( $settings->src_id ) ) {
	echo do_shortcode( sprintf( '[mdm_syndication_embed src="%s" id="%s"]', $settings->src_url, $settings->src_id ) );
}