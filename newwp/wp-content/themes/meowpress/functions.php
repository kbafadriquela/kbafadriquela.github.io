<?php

if (is_file(__DIR__ . '/vendor/autoload_packages.php')) {
    require_once __DIR__ . '/vendor/autoload_packages.php';
}

/**
 * Helper to get asset URL from Vite dev server or manifest
 */
function get_vite_asset_url(string $asset): string {
    static $manifest = null;
    $theme_dir = get_template_directory();
    $dist_url = get_template_directory_uri() . '/dist/';

    if (defined('WP_ENV') && WP_ENV === 'development') {
        return "http://localhost:5180/{$asset}";
    }

    if ($manifest === null) {
        $manifest_path = $theme_dir . '/dist/manifest.json';
        if (file_exists($manifest_path)) {
            $manifest = json_decode(file_get_contents($manifest_path), true);
        } else {
            $manifest = [];
        }
    }

    return isset($manifest[$asset]) ? $dist_url . $manifest[$asset]['file'] : $dist_url . $asset;
}

/**
 * Main TailPress theme setup
 */
function tailpress(): TailPress\Framework\Theme
{
    $theme = TailPress\Framework\Theme::instance();

    // Set Vite dev server URL only in development
    if (defined('WP_ENV') && WP_ENV === 'development') {
        $theme->setDevServerUrl('http://localhost:5180/');
    }

    return $theme
        ->assets(fn($manager) => $manager
            ->withCompiler(new TailPress\Framework\Assets\ViteCompiler, fn($compiler) => $compiler
                ->registerAsset('resources/css/app.css')
                ->registerAsset('resources/js/app.js')
                ->editorStyleFile('resources/css/editor-style.css')
            )
            ->enqueueAssets()
        )
        ->features(fn($manager) => $manager->add(TailPress\Framework\Features\MenuOptions::class))
        ->menus(fn($manager) => $manager->add('primary', __('Primary Menu', 'tailpress')))
        ->themeSupport(fn($manager) => $manager->add([
            'title-tag',
            'custom-logo',
            'post-thumbnails',
            'align-wide',
            'wp-block-styles',
            'responsive-embeds',
            'html5' => [
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
            ]
        ]));
}

tailpress();

function meowpress_custom_logo_setup() {
	$defaults = array(
		'height'               => 100,
		'width'                => 70,
		'flex-height'          => true,
		'flex-width'           => true,
		'header-text'          => array( 'site-title', 'site-description' ),
		'unlink-homepage-logo' => true, 
	);
	add_theme_support( 'custom-logo', $defaults );
}
add_action( 'after_setup_theme', 'meowpress_custom_logo_setup' );
