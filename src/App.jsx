import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    // StrictModeかつ開発環境であれば2回呼び出される。
    /* 再レンダリングが起きるとき
    1. propsの値変更
    2. stateが変更されたとき
    3. 親のコンポーネントが更新されたとき
    */
    console.log("---App=---")
    // 好きな変数を入れることができる。numの初期値を入れることができる。
    const [num, setNum] = useState(0);
    const [isShowFace, setIsShowFace] = useState(false);
    const onClickCountUp = () => {
        // 特定の関数の中でSet関数が呼び出されたときはまとめて処理される＝バッチ処理
        // setNum(num + 1);
        // setNum(num + 1);

        // 今の値をそのまま使う場合は下記のように書く。上の2行だと1づつしか増えないけど下だと2づつ増える。
        setNum((prev) => prev + 1);
    };
    const onClickToggle = () => {
        setIsShowFace(!isShowFace)
    };

    // 第二引数の配列の中に入った変数が変更されたときのみ動く機能。
    useEffect(() =>{
        if(num > 0){
            if(num % 3 === 0){
                isShowFace || setIsShowFace(true)
            }
            else{
                isShowFace && setIsShowFace(false)
            }
        }
    },[num]);
    
    return (
        <>
            <h1 style={{color: "red"}}>こんにちは！！</h1>
            <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="green">元気です</ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>on/off</button>
            {isShowFace && <p>( ﾟДﾟ)</p>}
        </>
    )
}; 