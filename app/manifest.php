<?php
$dir = new RecursiveDirectoryIterator(".");
$hashes = "";

header('Content-Type: text/cache-manifest');
echo "CACHE MANIFEST\n";

foreach(new RecursiveIteratorIterator($dir) as $file) {
        if ($file->IsFile() &&
        $file != "./manifest.php" &&
        substr($file->getFilename(), 0, 1) != "." &&
        substr($file, 0, 9) != "./archive" &&
        strpos($file, "/.svn") === false) {
                echo $file . "\n";
                $hashes .= md5_file($file);
        }
}
echo "# Hash: " . md5($hashes) . "\n";
?>