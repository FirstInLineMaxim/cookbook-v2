import React,{useEffect} from 'react'
import { UserCard } from 'react-ui-cards';
import frank from './img/Avatars/frank.webp'
import michell from './img/Avatars/Michell.webp'
import maxim from './img/Avatars/maxim.webp'
import './devs.css'

export default function TheDevs() {
  return (
    <div className='theMain'>
        <h2>TheDevs & The Tech</h2>
        <div className='TheTech'>
            <h3>The Tech for this Project</h3>
            <h4>REACT</h4>
            <p>General Structure for Creating the App</p>
            <h4>REACT ROUTER DOM</h4>
            <p>Creating the individual Routes from </p>
            <h4>CONTENTFUL API</h4>
            <p>Recieve the Recepies</p>
            <h4>REACT UI CARDS</h4>
            <p>The Cards for the styling of the Dev cards</p>
            

        </div>
            <h3>The Developer of this Project</h3>
        <div className='theDevs'>
            <UserCard
                    float
                    href='https://github.com/frankasamoah'
                    header='https://i.imgur.com/xJ1P6W2.jpeg'
                    avatar={frank}
                    name='Frank'
                    stats={[
                        {
                            value:" Avaiblable for hire.",
                            name: "Click to see his Github"
                        }
                    ]}
                    positionName='FullStack Dev'
                />
                                <UserCard
                    float
                    href='https://github.com/Tiefengnom'
                    header='https://i.imgur.com/msV7Rp1.jpeg'
                    avatar={michell}
                    name='Michell'
                    stats={[
                        {
                            value:" Avaiblable for hire.",
                            name: "Click to see his Github"
                        }
                    ]}
                    positionName='FullStack Dev'
                />

                    <UserCard
                        float
                        href='https://github.com/FirstInLineMaxim'
                        header='https://i.imgur.com/FwSnZTq.jpeg'
                        avatar={maxim}
                        name='Maxim'
                        stats={[
                            {
                                value:" Avaiblable for hire.",
                                name: "Click to see his Github"
                            }
                        ]}
                        positionName='FullStack Dev'
                    />
        </div>
    </div>
  )
}
