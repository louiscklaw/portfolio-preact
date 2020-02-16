import { Component, createContext } from "preact";

const Theme = createContext("light");
const BuildInfo = createContext("test");

export { Theme, BuildInfo };
