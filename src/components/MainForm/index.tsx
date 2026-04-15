import { useState } from "react";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";

export function MainForm(){
    const [inputValue, setInputValue] = useState('');
    const [displayText, setDisplayText] = useState('');

    return(
        <form className="form" action=''>
            <div className="formRow">
                <DefaultInput
                labelText="Login"
                id="meuInput"
                type="text"
                placeholder="Digite seu nome"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
              <div className="formRow">
                <DefaultButton type="button" onClick={() => setDisplayText(`Olá ${inputValue}!`)}/>
            </div>
              {displayText && (
                <div className="formRow">
                    <p style={{ color: 'var(--text-default)', fontSize: '1.5rem', textAlign: 'center' }}>
                        {displayText}
                    </p>
                </div>
              )}
        </form>

        );
}