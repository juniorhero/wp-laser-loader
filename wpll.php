<?php

/*
Plugin Name: WP Laser Loader
Description: Make Your Website Do Laser Loading like Youtube
Plugin URI: http://juniorhero.com/wp-laser-loader/
Version: 1.0.0
Author: Athul Jayaram
Author URI: http://juniorhero.com
License: GPLv2
*/



function wpll() {
      wp_enqueue_style( 'wpll-style', plugins_url( '/wpll.css', __FILE__ ) );
	wp_enqueue_script('wpll-script', plugins_url( '/wpll.js', __FILE__ ) );

}

add_action( 'wp_enqueue_scripts', 'wpll' );

?>