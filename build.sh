<<<<<<< HEAD
rm -rf dist
rm -rf build
rm -rf tmp

npm run build:esm
npm run compile
#node node_modules/.bin/ngc -p ./tsconfig-build.json
node node_modules/rollup/dist/rollup -c

cp src/package.json dist-npm/package.json
=======
rm -rf dist
rm -rf build
rm -rf tmp

npm run build:esm
npm run compile
#node node_modules/.bin/ngc -p ./tsconfig-build.json
node node_modules/rollup/dist/rollup -c

cp src/package.json dist-npm/package.json
>>>>>>> 4aecdf404bd7af1c7e209af4ffee92996bd92b7d
