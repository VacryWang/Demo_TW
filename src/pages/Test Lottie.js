import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function TestLottie() {
    return (
        <div>
            <Player
                autoplay
                loop
                src="https://lottie.host/7486e790-a724-45c8-a8b6-5c97acab83e7/Jp5wBxQq82.json"
                style={{ height: '300px', width: '300px' }}
            >
                <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>
    )
}