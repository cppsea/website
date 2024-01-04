const members = document.querySelectorAll("member");

const MEDIA_ICONS = {
  "linkedin": "../../assets/tokens/linkedin.svg",
  "website": "../../assets/tokens/website.svg",
  "github": "../../assets/tokens/github.svg"
};

function createMember(member, props) {
  const { name, position, media } = props;

  const contentFrame = document.createElement("div");
  contentFrame.classList.add("content");

  const nameLabel = document.createElement("h3");
  nameLabel.innerText = name;

  const positionLabel = document.createElement("p");
  positionLabel.innerText = position;

  const mediaFrame = document.createElement("div");
  mediaFrame.classList.add("media-frame")
  media?.forEach((link) => {
    if (!link) return;

    const icon = document.createElement("a");
    icon.href = link;
    icon.target = "_blank";
    icon.rel="noopener";

    const social = document.createElement("img");
    social.classList.add("social");
    if (link.includes("linkedin")) {
      social.src = MEDIA_ICONS["linkedin"];
    } else if (link.includes("github")) {
      social.src = MEDIA_ICONS["github"];
    } else {
      social.src = MEDIA_ICONS["website"];
    }

    icon.appendChild(social);
    mediaFrame.appendChild(icon);
  });

  contentFrame.appendChild(nameLabel);
  contentFrame.appendChild(positionLabel);
  contentFrame.appendChild(mediaFrame);

  member.appendChild(contentFrame);
}

members.forEach((member) => {
  const name = member.getAttribute("name");
  const position = member.getAttribute("position");
  const linkedin = member.getAttribute("linkedin");
  const website = member.getAttribute("website");

  createMember(member, {
    name,
    position,
    media: [linkedin, website]
  })
});