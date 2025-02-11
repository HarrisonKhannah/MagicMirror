import React, { useState, useEffect, useRef } from "react";

const Participant = ({ participant, local }) => {
	const [videoTracks, setVideoTracks] = React.useState([]);
	const [audioTracks, setAudioTracks] = React.useState([]);
	const videoRef = React.useRef();
	const audioRef = React.useRef();
	const trackpubsToTracks = (trackMap) =>
		Array.from(trackMap.values())
			.map((publication) => publication.track)
			.filter((track) => track !== null);
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
		const audioTrack = audioTracks[0];
		if (audioTrack) {
			audioTrack.attach(videoRef.current);
			return () => {
				audioTrack.detach();
			};
		}
	}, [audioTracks]);

	if (local) {
		return (
			<div className="participant" style={{ height: "10vh", width: "10vw", marginBottom: "10vh" }}>
				<video ref={videoRef} autoPlay={true} />
				<audio ref={audioRef} autoPlay={true} muted={true} />
			</div>
		);
	}

	return (
		<div className="participant" style={{ width: "80vw", height: "70vh", overflow: "hidden" }}>
			<video ref={videoRef} autoPlay={true} />
			<audio ref={audioRef} autoPlay={true} muted={true} />
		</div>
	);
};

export default Participant;
