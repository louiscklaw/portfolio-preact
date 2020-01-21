#!/usr/bin/env node

const cp = require( 'child_process' );

const proj_dirs = `src/components/pages/ProjectDetail`

cp.execSync( `find ${proj_dirs} -type f`, {
    encoding: 'utf-8'
  } ).split( '\n' )
  .filter( x => x.endsWith( '.dot' ) )
  .map( dot_file => {
    try {
      svg_filename = dot_file.replace( /\.dot$/, '.svg' )
      console.log( `converting ${dot_file} to ${svg_filename}` );
      cp.execSync( `dot -Tsvg ${dot_file} -o ${svg_filename}` );
    } catch ( error ) {
      console.error( `error during processing file ${dot_file}` );
    }
  } )
