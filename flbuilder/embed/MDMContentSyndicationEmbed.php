<?php
namespace mdm\syndication\flbuilder\embed;
/**
 * @class QueryEngine
 */
class MDMContentSyndicationEmbed extends \FLBuilderModule {

	/**
	 * @method __construct
	 */
	public function __construct() {
		parent::__construct(array(
			'name'          	=> __( 'MDM Content Embeds', 'cornerstone' ),
			'description'   	=> __( 'Embed content from other site running MDM Content Syndication', 'cornerstone' ),
			'category'      	=> __( 'Basic', 'cornerstone' ),
			'editor_export' 	=> true,
			'partial_refresh'	=> true,
		));
	}

	/**
	 * Register the module and its form settings.
	 */
	public static function register() {
		\FLBuilder::register_module( __CLASS__, [
			'general' => [
				'title' => __( 'Embed', 'bb_dev_kit' ),
				'sections' => [
					'general'=> [
						'title' => '',
						'fields' => [
							'src_url' => [
								'type' => 'text',
								'label' => __('Source Domain', 'bb_dev_kit'),
								'default'  => '',
							],
							'src_id' => [
								'type' => 'text',
								'label' => __('Post ID', 'bb_dev_kit'),
								'default'  => '',
							],
						],
					],
				],
			],
		]);
	}

}