<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0bd543b9e535a4cd6408877f35f47464
{
    public static $prefixLengthsPsr4 = array (
        'w' => 
        array (
            'wpcl\\wpconsole\\' => 15,
        ),
        'm' => 
        array (
            'mdm\\syndication\\widgets\\' => 24,
            'mdm\\syndication\\taxonomies\\' => 27,
            'mdm\\syndication\\posttypes\\' => 26,
            'mdm\\syndication\\flbuilder\\' => 26,
            'mdm\\syndication\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'wpcl\\wpconsole\\' => 
        array (
            0 => __DIR__ . '/..' . '/wpcl/wpconsole/src',
        ),
        'mdm\\syndication\\widgets\\' => 
        array (
            0 => __DIR__ . '/../..' . '/widgets',
        ),
        'mdm\\syndication\\taxonomies\\' => 
        array (
            0 => __DIR__ . '/../..' . '/taxonomies',
        ),
        'mdm\\syndication\\posttypes\\' => 
        array (
            0 => __DIR__ . '/../..' . '/posttypes',
        ),
        'mdm\\syndication\\flbuilder\\' => 
        array (
            0 => __DIR__ . '/../..' . '/flbuilder',
        ),
        'mdm\\syndication\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit0bd543b9e535a4cd6408877f35f47464::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit0bd543b9e535a4cd6408877f35f47464::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit0bd543b9e535a4cd6408877f35f47464::$classMap;

        }, null, ClassLoader::class);
    }
}
