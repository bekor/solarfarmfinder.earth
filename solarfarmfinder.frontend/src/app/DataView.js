'use client'
import axios from 'axios'

export default function DataView() {
    const handleListItemClick = () => {
        const options = {
            method: 'GET',
            url: `https://maps.googleapis.com/maps/api/staticmap?center=47.5044531,19.0583022&zoom=13&size=600x300&maptype=sattelite&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        };
        console.log(options);
        axios.request(options).then(function (response) {
            //
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <Button
            onClick={handleListItemClick}
        >
            Click me
        </Button>
    );
}

const Button = ({ onClick, children }) => {
    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    );
};