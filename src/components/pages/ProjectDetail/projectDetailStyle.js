import theme from "../../../style/theme";

var Container = {
  color: theme.THEME_COLOR,
  minHeight: "100vh"
};

var ProjectHead = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "spaceBetween"
};

var a = {
  color: "rgba(52, 73, 94, 1.0)"
};

var ProjectDescription = {
  marginTop: "4em",
  marginBottom: "4em",
  marginLeft: "auto",
  marginRight: "auto",
  width: "75%",
  textAlign: "left"
};
var DescBody = {
  paddingTop: "1.1em",
  paddingBottom: "1.3em"
};
var DescTopic = {
  fontWeight: "700",
  paddingTop: "2em",
  paddingBottom: "0.5em",

  textDecoration: "underline"
};

var ul = {
  listStyle: "none"
};

export default {
  Container,
  a,
  ProjectDescription,
  DescBody,
  DescTopic,
  ul,
  ProjectHead
};
