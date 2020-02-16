import theme from "../../style/theme.js";

var nav_middle = {
  paddingTop: "1em",
  height: "33vh"
};

var nav_middle_li = {
  textTransform: "uppercase",
  paddingTop: "10px",
  paddingBottom: "10px",
  textAlign: "center"
};

var a = {
  color: theme.THEME_COLOR_LIGHTEST,
  fontWeight: "bold"
};

var ul = {
  listStyle: "none"
};

var nav_bottom = {
  paddingTop: "2em",
  height: "34vh"
};

var credits_link_container = {
  paddingTop: "30px"
};

var credits_link = {
  textDecoration: "underline",
  marginTop: "20px",
  fontWeight: "bold",
  color: theme.THEME_COLOR_LIGHTEST
};

var build_status = {
  paddingTop: "10px",
  paddingBottom: "10px",
  textAlign: "center"
};

var source_code_link_container = {
  textAlign: "center",
  width: "100%",
  fontSize: "0.9em",
  color: theme.THEME_COLOR_LIGHTEST
};

var source_code_link = {
  textDecoration: "underline",
  marginTop: "20px",
  fontSize: "0.8em",
  fontWeight: "bold",
  color: theme.THEME_COLOR_LIGHTEST
};

var credit_container = {
  paddingTop: "30px",
  color: theme.THEME_COLOR_LIGHTEST,
  fontSize: "0.8em",
  textAlign: "center"
};

var credit_container_a = {
  position: "relative",
  listStyle: "none"
};

var social_links = {
  display: "inline-flex",
  listStyle: "none"
};

var social_link_a = {
  color: theme.THEME_COLOR_LIGHTEST,
  fontSize: "1.5em",
  fontWeight: "normal",
  paddingLeft: "3px",
  paddingRight: "3px",
  paddingBottom: "10px"
};

var social_links_container = {
  width: "100%",
  textAlign: "center"
};

var nav_container = {
  backgroundColor: theme.THEME_COLOR
};

var mobile_menu = {
  display: "none",
  backgroundColor: theme.THEME_COLOR
};

var menu_body = {
  display: "block"
  // backgroundColor: 'red'
};

export default {
  // all nav
  nav_container,
  mobile_menu,
  menu_body,

  // nav_top
  // nav_top,
  // nav_top_greeting_plate,
  // nav_top_avatar,
  // nav_top_avatar_img,

  // nav_middle
  nav_middle,
  nav_middle_li,
  ul,
  a,

  // nav_bottom
  nav_bottom,
  credits_link,
  build_status,
  source_code_link_container,
  source_code_link,
  credit_container,
  credit_container_a,
  social_links,
  social_link_a,
  social_links_container,
  credits_link_container
};
