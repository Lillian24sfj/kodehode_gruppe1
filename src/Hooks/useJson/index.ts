/**
 * This file exists soley to simplify importing
 * this component into other projects.
 *
 * We are in essence using this to decide which
 * files that this component consists of that
 * others might import.
 *
 * Done by importing the parts we want from
 * the other files in this directory and
 * reexporting them.
 *
 * Not necessary when your component consist
 * of only the component files. But here
 * they have the additional Storybook files
 * test files with more. And this pattern allows
 * us to exclude these.
 */

export { useJson } from "./useJson";
