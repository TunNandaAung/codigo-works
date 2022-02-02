const CallToAction = ({ work }) => {
  return (
    <div className="WorkDetails__description__cta">
      {work.ios_url && (
        <IosCta url={work.ios_url} hasRightBorder={!work.android_url} />
      )}
      {work.android_url && (
        <AndroidCta
          url={work.android_url}
          hasLeftBorder={!work.ios_url}
          hasRightBorder={!work.web_url}
        />
      )}
      {work.web_url && <WebCta url={work.web_url} />}
    </div>
  );
};

const IosCta = ({ url }) => {
  return (
    <a
      className={"WorkDetails__description__cta__box border-x "}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://www.codigo.co/img/ui/ico-app_store.png"
        alt="App Store"
      />
      <p className="text-xs uppercase tracking-wide">
        <span className="text-[0.6rem] font-semibold">Available On</span>
        <br />
        <span className="text-sm font-bold capitalize">App Store</span>
      </p>
    </a>
  );
};

const AndroidCta = ({ url, hasLeftBorder = false, hasRightBorder = true }) => {
  return (
    <a
      className={
        "WorkDetails__description__cta__box " +
        (hasLeftBorder ? " border-l " : " ") +
        (hasRightBorder ? " border-r " : "")
      }
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://www.codigo.co/img/ui/ico-google_play-store.png"
        alt="Play Store"
      />
      <p className="text-xs uppercase tracking-wide">
        <span className="text-[0.6rem] font-semibold">Available On</span>
        <br />
        <span className="text-sm font-bold capitalize">App Store</span>
      </p>
    </a>
  );
};

const WebCta = ({ url, hasLeftBorder = false }) => {
  return (
    <a
      className={"WorkDetails__description__cta__box border-x"}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <img src="https://www.codigo.co/img/ui/ico-web.png" alt="Play Store" />
      <p className="text-xs uppercase tracking-wide">
        <span className="text-[0.6rem] font-semibold">Live on</span>
        <br />
        <span className="text-sm font-bold capitalize">website.com</span>
      </p>
    </a>
  );
};

export default CallToAction;
