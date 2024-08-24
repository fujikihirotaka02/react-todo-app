import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    // 好きな変数を入れることができる。numの初期値を入れることができる。
    const [num, setNum] = useState(0);
    const onClickCountUp = () => {
        // 特定の関数の中でSet関数が呼び出されたときはまとめて処理される＝バッチ処理
        // setNum(num + 1);
        // setNum(num + 1);

        // 今の値をそのまま使う場合は下記のように書く。上の2行だと1づつしか増えないけど下だと2づつ増える。
        setNum((prev) => prev + 1);
        setNum((prev) => prev + 1);
        
    }
    return (
        <>
            <h1 style={{color: "red"}}>こんにちは！！</h1>
            <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="green">元気です</ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
        </>
    )
}; 