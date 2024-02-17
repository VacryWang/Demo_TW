import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function TestLottie() {
    return (
        <div>
            <Player
                autoplay
                loop
                src="https://lottie.host/9ada6654-80c2-43f2-9800-18caeaca1747/sTYXn5GhJH.json"
                style={{ width: '800px' }}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>
    )
}