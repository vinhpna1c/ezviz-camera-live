
import React from 'react';
import { useEffect, useState } from 'react';
import EZUIKit from 'ezuikit-js';

const getWindowDimension = () => {

    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    }
}

function Home() {

    const { token, url } = new URLSearchParams(document.location.search);
    console.log(token + " - " + url);
    const [player, setPlayer] = useState(null);
    const [dimension, setDimension] = useState(getWindowDimension());
    const play = () => {
        var playPromise = player.play();
        playPromise.then((data) => {
            console.log("promise 获取 数据", data)
        })
    }
    const stop = () => {
        var stopPromise = player.stop();
        stopPromise.then((data) => {
            console.log("promise 获取 数据", data)
        })
    }
    const getOSDTime = () => {
        var getOSDTimePromise = player.getOSDTime();
        getOSDTimePromise.then((data) => {
            console.log("promise 获取 数据", data)
        })
    }
    const capturePicture = () => {
        var capturePicturePromise = player.capturePicture(`${new Date().getTime()}`);
        capturePicturePromise.then((data) => {
            console.log("promise 获取 数据", data)
        })
    }
    const openSound = () => {
        var openSoundPromise = player.openSound();
        openSoundPromise.then((data) => {
            console.log("promise 获取 数据", data)
        })
    }
    const closeSound = () => {
        var openSoundPromise = player.closeSound();
        openSoundPromise.then((data) => {
            console.log("promise 获取 数据", data)
        })
    }
    const startSave = () => {
        var startSavePromise = player.startSave(`${new Date().getTime()}`);
        startSavePromise.then((data) => {
            console.log("promise 获取 数据", data)
        })
    }
    const stopSave = () => {
        var stopSavePromise = player.stopSave();
        stopSavePromise.then((data) => {
            console.log("promise 获取 数据", data)
        })
    }
    const ezopenStartTalk = () => {
        player.startTalk();
    }
    const ezopenStopTalk = () => {
        player.stopTalk();
    }
    const fullScreen = () => {
        player.fullScreen();
    }
    console.log(dimension)
    const dimensionHeight = dimension.width / 4 * 3;

    useEffect(() => {
        fetch('https://open.ys7.com/jssdk/ezopen/demo/token')
            .then(response => response.json())
            .then(res => {
                var accessToken = res.data.accessToken;
                const ezPlayer = new EZUIKit.EZUIKitPlayer({
                    id: 'video-container',
                    accessToken: 'at.4w1j1zaf86twsdl24p6m9nqn4fpqgqk5-6pn292h497-0eclc60-q4tdvf235',
                    url: 'ezopen://open.ezviz.com/BA3686955/1.hd.live',
                    template: 'mobileLive',
                    plugin: ['talk'],
                    deocoder: "",
                    width: dimension.width,
                    height: (dimensionHeight > dimension.height ? dimension.height : dimensionHeight) - 50,
                    env: {
                        domain: "https://isgpopen.ezvizlife.com"
                    }
                });
                setPlayer(ezPlayer);
            });
    }, [dimension.width])

    useEffect(() => {
        const onSizeChange = () => {
            setDimension(getWindowDimension());
        };
        window.addEventListener('resize', onSizeChange);
        return () => window.removeEventListener('resize', onSizeChange);

    }, [])

    return (
        <div className="demo">

            <div id="video-container">
            </div>
            {/* <div>
                <button onClick={() => stop()}>stop</button>
                <button onClick={() => play()}>play</button>
                <button onClick={() => openSound()}>openSound</button>
                <button onClick={() => closeSound()}>closeSound</button>
                <button onClick={() => startSave()}>startSave</button>
                <button onClick={() => stopSave()}>stopSave</button>
                <button onClick={() => capturePicture()}>capturePicture</button>
                <button onClick={() => fullScreen()}>fullScreen</button>
                <button onClick={() => getOSDTime()}>getOSDTime</button>
                <button onClick={() => ezopenStartTalk()}>Start Talk</button>
                <button onClick={() => ezopenStopTalk()}>EndTalk</button>
            </div> */}
        </div>
    );

}

export default Home;