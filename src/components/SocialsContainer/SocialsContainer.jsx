
import { DiscordIcon, GithubIcon, MediumIcon, TwitterIcon } from '../svgIcons';
import './SocialsContainer.scss';

const SocialsContainer = props => {
    return(
        <div className = "socials-container">
            <a
            href="https://honeylabs.medium.com"
            rel="noopener noreferrer"
            target="_blank"
            >
            <MediumIcon />
            </a>
            <a
            href="https://twitter.com/honeydefi"
            rel="noopener noreferrer"
            target="_blank"
            >
            <TwitterIcon />
            </a>
            <a
            href="https://discord.gg/T7RQ8hMamB"
            rel="noopener noreferrer"
            target="_blank"
            >
            <DiscordIcon />
            </a>
            <a
            href="https://github.com/honey-labs"
            rel="noopener noreferrer"
            target="_blank"
            >
            <GithubIcon />
            </a>
        </div>
    )
}

export default SocialsContainer;