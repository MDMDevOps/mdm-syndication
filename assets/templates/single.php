<!doctype html>

<html <?php language_attributes(); ?>>

	<head>

		<meta charset="<?php bloginfo( 'charset' ); ?>">

		<meta name="viewport" content="width=device-width, initial-scale=1">

		<link rel="profile" href="https://gmpg.org/xfn/11">

		<?php wp_head(); ?>

	</head>

	<?php $instance = isset( $_GET['instance'] ) ? $_GET['instance'] : 'false'; ?>

	<body <?php body_class(); ?> style="overflow: hidden" data-instance="<?php echo $instance; ?>">

			<div id="page">

				<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

					<div class="embed">

						<div class="embed-content">

							<?php the_content(); ?>

						</div>

					</div>

				<?php endwhile; endif; ?>

			</div>

		<?php wp_footer(); ?>

	</body>

</html>