<?php get_header(); ?>
	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	
	<?php the_title(); ?>
	
	<?php endwhile; else: ?>

	¯\_(ツ)_/¯

	<?php endif; ?>
<?php get_footer(); ?>