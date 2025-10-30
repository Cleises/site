class Header extends React.Component {
  constructor() {
    super();
    this.state = { contentStyle: { left: '0px', top: '0px' } };
    this.mouseOver = this.mouseOver.bind(this);
  }

  mouseOver(e) {
    this.setState({
      contentStyle: {
        left: e.pageX / 100 + 'px',
        top: e.pageY / 100 + 'px'
      }
    });
  }

  render() {
    // Додамо короткі описи для кожної соцмережі
    const socialLinks = [
      {
        href: "https://www.instagram.com/cleises_/",
        icon: this.props.firstIcon,
        info: "Instagram — мої фото, lifestyle"
      },
      {
        href: "https://t.me/cleises/",
        icon: this.props.secondIcon,
        info: "Telegram — для спілкування"
      },
      {
        href: "https://steamcommunity.com/id/cleises/",
        icon: this.props.fiveIcon,
        info: "Steam — ігри, профіль"
      },
      {
        href: "https://open.spotify.com/user/31x3ozr5s7kc3t7hbh54nf4qlfdm?si=d613056fed4d4a66",
        icon: this.props.thirdIcon,
        info: "Spotify — моя музика"
      }
    ];

    return (
      React.createElement(
        "div",
        { className: "header", onMouseMove: this.mouseOver },
        React.createElement("div", { id: "particles-js" }),
        React.createElement(
          "div",
          { className: "content-wrapper" },
          React.createElement(
            "div",
            { className: "content", style: this.state.contentStyle },
            React.createElement("h1", null, this.props.name),
            React.createElement("p", null, this.props.role),
            socialLinks.map((s, i) =>
              React.createElement(
                "div",
                { className: "icon-wrapper", key: i },
                React.createElement("a", { href: s.href, className: s.icon }),
                React.createElement("span", { className: "tooltip" }, s.info)
              )
            )
          )
        )
      )
    );
  }
}
