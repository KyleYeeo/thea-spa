const Video = () => {
    return (
        <div className='video'>
            <video autoPlay muted loop playsInline>
                <source src={`/images/${'video'}.mp4`} />
            </video>
        </div>
    );
}

export default Video;