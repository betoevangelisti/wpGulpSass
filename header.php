<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<title><?php wp_title('&raquo;','true','right'); bloginfo('name'); if( is_home() ) { echo " &raquo; " . get_bloginfo('description', 'display'); } ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<!--[if (lte IE 8)]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/libs/html5shiv.min.js"></script>
	<![endif]-->
	<script src="<?php echo get_template_directory_uri(); ?>/js/libs/modernizr.custom.75908.min.js"></script>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>