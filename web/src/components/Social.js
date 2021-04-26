import "../style/layout/Preview.scss";

function Social(props) {
  return (
    <li
      className="logo__list--item"
      style={
        props.palette === "4" ? { border: `2px solid ${props.color3}` } : {}
      }
    >
      <a className={"link__card"} title="" href={props.href}>
        <i
          className={"fa fa-" + props.iClass}
          style={props.palette === "4" ? { color: props.color1 } : {}}
        ></i>
      </a>
    </li>
  );
}

export default Social;
