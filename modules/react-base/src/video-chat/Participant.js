import React, { useState, useEffect, useRef } from "react";

const Participant = ({ participant }) => {
	const [videoTracks, setVideoTracks] = React.useState([]);
	const [audioTracks, setAudioTracks] = React.useState([]);
	const videoRef = React.useRef();
	const audioRef = React.useRef();
	React.useEffect(() => {
		const trackSubscribed = (track) => {
			if (track.kind === "video") {
				setVideoTracks((videoTracks) => [...videoTracks, track]);
			} else {
				setAudioTracks((audioTracks) => [...audioTracks, track]);
			}
		};

		const trackUnsubscribed = (track) => {
			if (track.kind === "video") {
				setVideoTracks((videoTracks) => videoTracks.filter((v) => v !== track));
			} else {
				setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
			}
		};
		setVideoTracks(trackpubsToTracks(participant.videoTracks));
		setAudioTracks(trackpubsToTracks(participant.audioTracks));

		participant.on("trackSubscribed", trackSubscribed);
		participant.on("trackUnsubscribed", trackUnsubscribed);

		return () => {
			setVideoTracks([]);
			setAudioTracks([]);
			participant.removeAllListeners();
		};
	}, [participant]);

	React.useEffect(() => {
		const videoTrack = videoTracks[0];
		if (videoTrack) {
			videoTrack.attach(videoRef.current);
			return () => {
				videoTrack.detach();
			};
		}
	}, [videoTracks]);
	React.useEffect(() => {
		const audioTracks = audioTrackss[0];
		if (audioTracks) {
			audioTracks.attach(audioRef.current);
			return () => {
				audioTracks.detach();
			};
		}
	}, [audioTracks]);

	return (
		<div className="participant">
			<h3>{participant.identity}</h3>
			<video ref={videoRef} autoPlay={true} />
			<audio ref={audioRef} autoPlay={true} muted={true} />
		</div>
	);
};

export default Participant;
