import React from 'react'
import { Link } from 'react-router-dom'
import { BUTTON_STYLES, LINK_STYLES } from '../style/styles'

export const About = () => {
    return (
        <div>
            <h1>About Scripture Src</h1>
            <p>Scripture Src is an idea for "open-sourcing" biblical commentary. 
                By creating an account, you can submit an annotation for any given verse that you would like to give context to.</p>
            <p>An annotation can only be approved if it provides <strong>context from a historic, grammatical, or archeological perspective.</strong></p>
            <p>The goal of this application is to give readers context about the places, cultures, and people that are discoverd in the Bible,
                any submissions that might be up for doctrinal debate will be rejected.
            </p>
            <p>reach out to austinwills98@gmail.com if you have any questions or concerns</p>
            <p>NOTE: THE BOOK OF PHILIPPIANS DOES NOT PROPERLY DISPLAY YET</p>
            <button style={BUTTON_STYLES}><Link style={LINK_STYLES} to="/">back to home</Link></button>
        </div>
    )
}
