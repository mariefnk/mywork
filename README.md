# 

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Typical workflow

Any commands that you have to run on the terminal SHOULD be run from the project
directory.

1. Go to the project page and see if there are any 
pull requests: https://bitbucket.org/mwf_jerry_saravia/mwf-ui/pull-requests/
(probably not going to happen often)
2. Run `git fetch origin`. This pulls the latest code from other people.
3. Make sure you know which branch you're on with `git branch`. Make sure you're on the right branch.
4. Now you start working with `grunt serve`. That'll open up a web browser with 
the project loaded.
5. Edit any code, create any new files you want. Develop!
6. Review your changes and then commit them with 

```
git add [filename]
git add [filename_2]
git commit -m "Your message here"
# or call Marie for help!
```

7. `git push origin`. This will push your changes to bitbucket

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Updating a dependency

### Bower

1. Edit the `bower.json` file
2. Run `bower update` on the terminal