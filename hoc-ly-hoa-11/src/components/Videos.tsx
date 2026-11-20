import React from 'react';
import type {Video} from '../types';

// Each video is either your own rendered file (public/videos/...) or a YouTube video ID.
// Until one is set, the card shows a search button so you can pick a good lesson.
export const Videos: React.FC<{videos: Video[]}> = ({videos}) => (
	<div className="videos">
		{videos.map((v) => (
			<section key={v.title} className="card video">
				<h3>{v.title}</h3>
				{v.file ? (
					<video controls preload="metadata" src={`${import.meta.env.BASE_URL}${v.file}`} />
				) : v.youtubeId ? (
					<div className="frame">
						<iframe
							src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
							title={v.title}
							allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				) : (
					<div className="video-empty">
						<p className="muted small">
							Chưa có video. Phụ huynh: chọn một bài giảng hay trên YouTube rồi dán mã video vào file dữ liệu, hoặc
							tự làm video bằng youtube-video-studio.
						</p>
						<a
							className="button"
							target="_blank"
							rel="noreferrer"
							href={`https://www.youtube.com/results?search_query=${encodeURIComponent(v.search)}`}
						>
							🔎 Tìm trên YouTube
						</a>
					</div>
				)}
				{v.note ? <p className="small muted">{v.note}</p> : null}
			</section>
		))}
	</div>
);
