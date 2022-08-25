import React from "react";
import s from './Header.module.css'


const Header = () => {


    return (
        <div className={s.header}>
<span>
     <label htmlFor="level"> <span>Chose your level</span></label>
            <select name="level" id="">
                <option value="">A1</option>
                <option value="">A2</option>
                <option value="">B1</option>
                <option value="">B2</option>
                <option>C1</option>
                <option>C2</option>
            </select>
</span>
            <span>
    <label htmlFor='numberOfWords'>Chose number of word to translate</label>
    <select>
        <option value="">10</option>
        <option value="">20</option>
        <option value="">30</option>
        <option value="">40</option>
        <option value="">50</option>
    </select>
</span>
            <span>
      <label htmlFor='isTextSaved'>Save text</label>
            <input name='isTextSaved' type="checkbox"/>

</span>

            <span>
                <label htmlFor='isWordsSaved'> Save words </label>
            <input name='isWordsSaved' type="checkbox"/>
</span>


            <ul>
                <li><a href="src/components/Header/Heder">Desk</a></li>
                <li><a href="src/components/Header/Heder">Space repetition</a></li>
                <li><a href="src/components/Header/Heder">Games</a></li>
                <li><a href="src/components/Header/Heder">chat</a></li>
            </ul>

        </div>


    )
}

export default Header