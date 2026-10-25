const stations = [
	{
		name: 'Kral FM',
		description: 'A leading Turkish radio station based in Istanbul, Kral FM delivers a vibrant mix of Turkish pop, arabesque, fantasy, international pop, rock, R&B, and Top 40 hits. Known for its engaging DJs, lively talk segments, and music-driven energy, it remains one of Turkey\'s most listened-to stations.',
		country: 'Türkiye',
		url: 'https://dygedge2.radyotvonline.net/kralfm/playlist.m3u8',
		category: 'Turkish arabesque',
		quality: '128kbps',
		cover: './coverarts/kral-fm.png'
	},
	{
		name: 'Kral Pop',
		description: 'Specializing in Turkish and international pop, Kral Pop broadcasts from Istanbul with a bright, upbeat playlist of current hits and pop classics. The station adds depth with engaging DJs, news headers, and talk segments, catering to fans of lively, modern pop radio.',
		country: 'Türkiye',
		url: 'https://dygedge.radyotvonline.net/kralpop/playlist.m3u8',
		category: 'Turkish pop',
		quality: '128kbps',
		cover: './coverarts/kral-pop-fm.png'
	},
	{
		name: 'Power Türk FM',
		description: 'Turkey\'s high-energy pop station broadcasting the hottest Turkish pop, electro, and Top 40 hits—with a party atmosphere in every show.',
		country: 'Türkiye',
		url: 'https://live.powerapp.com.tr/powerturk/abr/playlist.m3u8',
		category: 'Turkish pop',
		quality: '256kbps',
		cover: './coverarts/power-turk-fm.png'
	},
	{
		name: 'Power FM',
		description: 'One of Turkey\'s leading hit music stations playing the best international pop, dance, and R&B hits.',
		country: 'Türkiye',
		url: 'https://live.powerapp.com.tr/powerfmadver/abr/playlist.m3u8',
		category: 'International pop',
		quality: '128kbps',
		cover: './coverarts/power-fm.png'
	},
	{
		name: 'America\'s Country',
		description: 'An online country station spinning the biggest hits from the 1990s to today—featuring artists like Luke Combs, Jason Aldean, Brad Paisley, and more, delivered with minimal chatter and lots of musical passion.',
		country: 'United States',
		url: 'https://ais-sa2.cdnstream1.com/1976_128.mp3',
		category: 'Country',
		quality: '128kbps',
		cover: './coverarts/americas-country.png'
	},
	{
		name: 'WLTW 106.7 Lite FM',
		description: 'New York\'s leading adult contemporary station, playing soft rock and pop favorites from the past decades to today.',
		country: 'United States',
		url: 'https://stream.revma.ihrhls.com/zc1477/hls.m3u8',
		category: 'Soft adult contemporary',
		quality: '256kbps',
		cover: './coverarts/wltw-106-7-lite-fm.png'
	},
	{
		name: 'BBC World Service',
		description: 'Global news, analysis, and features from the BBC, delivering reliable international reporting 24/7 in English and multiple other languages.',
		country: 'United Kingdom',
		url: 'https://stream.live.vc.bbcmedia.co.uk/bbc_world_service',
		category: 'News',
		quality: '128kbps',
		cover: './coverarts/bbc-world-service.png'
	},
	{
		name: 'BBC Radio 1',
		description: 'BBC Radio 1 focuses on contemporary music, targeting a younger audience with a mix of pop, hip-hop, and dance genres.',
		country: 'United Kingdom',
		url: 'https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/cfs/bbc_radio_one.m3u8',
		category: 'Contemporary hits',
		quality: '128kbps',
		cover: './coverarts/bbc-radio-1.png'
	},
	{
		name: 'BBC Radio 2',
		description: 'BBC Radio 2 remains a leading station, known for its wide-ranging music programming and popular breakfast show hosted by Scott Mills.',
		country: 'United Kingdom',
		url: 'https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_two.m3u8',
		category: 'Adult contemporary',
		quality: '128kbps',
		cover: './coverarts/bbc-radio-2.png'
	},
	{
		name: 'Heart FM',
		description: 'Heart is the UK\'s largest commercial radio network, offering a mix of contemporary hits and themed stations like Heart Musicals.',
		country: 'United Kingdom',
		url: 'https://media-ice.musicradio.com/HeartLondonMP3',
		category: 'Adult contemporary',
		quality: '128kbps',
		cover: './coverarts/heart-fm.png'
	},
	{
		name: 'WSM 650 AM',
		description: 'The most famous radio station for country music worldwide is generally considered to be WSM 650 AM in Nashville, Tennessee, USA. It\'s iconic for broadcasting the Grand Ole Opry, the legendary country music show that has been on air since 1925. WSM played a huge role in popularizing country music globally.',
		country: 'United States',
		url: 'https://ais-sa8.cdnstream1.com/3666_64.mp3',
		category: 'Classic country',
		quality: '128kbps',
		cover: './coverarts/wsm-650-am.png'
	},
	{
		name: 'WNYC 93.9 FM',
		description: 'WNYC is one of New York\'s flagship public radio stations, broadcasting the finest programs from NPR, American Public Media, Public Radio International and the BBC World Service, as well as a wide range of award-winning local programming.',
		country: 'United States',
		url: 'https://fm939.wnyc.org/wnycfm-web',
		category: 'Public radio',
		quality: '256kbps',
		cover: './coverarts/wnyc-93-9-fm.png'
	},
	{
		name: 'France Inter',
		description: 'France\'s leading public radio station, offering a blend of news, culture, and entertainment with a focus on in‑depth reporting and diverse programming.',
		country: 'France',
		url: 'https://icecast.radiofrance.fr/franceinter-midfi.mp3',
		category: 'Public generalist',
		quality: '128kbps',
		cover: './coverarts/france-inter.png'
	},
	{
        name: '1LIVE',
        description: 'A popular young adult radio station from Germany\'s WDR, featuring a vibrant mix of current pop, hip-hop, and dance hits along with comedy and lifestyle content.',
        country: 'Germany',
        url: 'https://wdr-1live-live.icecastssl.wdr.de/wdr/1live/live/mp3/128/stream.mp3',
        category: 'Contemporary hits',
        quality: '128kbps',
        cover: './coverarts/1-live.png'
    },
	{
		name: 'Deutschlandfunk',
		description: 'Germany\'s premier public news station, delivering comprehensive coverage of national and international events, culture, and current affairs.',
		country: 'Germany',
		url: 'https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3?aggregator=radio-de',
		category: 'News',
		quality: '128kbps',
		cover: './coverarts/deutschlandfunk.png'
	},
	{
		name: 'Xəzər FM (103 FM)',
		description: 'Azerbaijan\'s popular radio station based in Baku, playing a mix of pop, rock, R&B, and Azerbaijani folk music, along with news and entertainment.',
		country: 'Azerbaijan',
		url: 'https://s40.myradiostream.com/22546/listen.mp3',
		category: 'Pop / Dance',
		quality: '128kbps',
		cover: './coverarts/xezer-fm.png'
	},
	{
		name: 'Baku Retro FM (93.3 FM)',
		description: 'Your favorite nostalgic hits and golden classics broadcasting from Baku, Azerbaijan.',
		country: 'Azerbaijan',
		url: 'https://stream.bakuradioalliance.az/retrofm',
		category: 'Retro',
		quality: '128kbps',
		cover: './coverarts/baku-retro-fm.png'
	},
	{
		name: 'Baku Hit FM (97.7 FM)',
		description: 'The top destination for the latest pop tracks and hottest chart-topping hits in Azerbaijan.',
		country: 'Azerbaijan',
		url: 'https://stream.bakuradioalliance.az/hitfm',
		category: 'Contemporary hits',
		quality: '128kbps',
		cover: './coverarts/baku-hit-fm.png'
	},
	{
		name: 'Radio Enerji (101.1 FM)',
		description: 'An upbeat and energetic station delivering high-tempo dance, pop, and electronic music.',
		country: 'Azerbaijan',
		url: 'https://icecast.livetv.az/antennfm',
		category: 'Pop / Dance',
		quality: '128kbps',
		cover: './coverarts/enerji-fm.png'
	},
	{
		name: 'Avto FM (107.7 FM)',
		description: 'Azerbaijan\'s premier station for drivers, combining great music with real-time traffic updates and news.',
		country: 'Azerbaijan',
		url: 'http://5.191.241.101:8000/avtofm',
		category: 'Pop / Generalist',
		quality: '128kbps',
		cover: './coverarts/avto-fm.png'
	},
	{
		name: 'Media FM (105.5 FM)',
		description: 'A well-known national radio station delivering a blend of local and international hits alongside news updates.',
		country: 'Azerbaijan',
		url: 'https://icecast.livetv.az/mediafm',
		category: 'Generalist',
		quality: '128kbps',
		cover: './coverarts/media-fm.png'
	},
	{
		name: 'TMB Radio (100.5 FM)',
		description: 'Türk Milli Mərkəzi (TMB) Radio connects listeners with modern pop and traditional tunes from across the Turkic world.',
		country: 'Azerbaijan',
		url: 'https://s39.myradiostream.com/:5458/listen.mp3',
		category: 'Pop / Folk',
		quality: '128kbps',
		cover: './coverarts/radio-tmb.png'
	},
	{
		name: 'ASAN Radio (100 FM)',
		description: 'The first state-funded radio station in Azerbaijan dedicated to public services, informative talk shows, and modern music.',
		country: 'Azerbaijan',
		url: 'http://94.20.74.206:4448/stream1',
		category: 'Public radio',
		quality: '128kbps',
		cover: './coverarts/asan-radio.png'
	},
	{
		name: 'İctimai Radio (90 FM)',
		description: 'Azerbaijan\'s public radio broadcasting rich cultural, educational, and entertainment programs.',
		country: 'Azerbaijan',
		url: 'https://stream.itv.az/rtmp:/radio/playlist.m3u8',
		category: 'Public radio',
		quality: '128kbps',
		cover: './coverarts/90-fm.png'
	},
	{
		name: 'Araz FM (103.3 FM)',
		description: 'A popular local station featuring national Azerbaijani hits, folk tunes, and engaging daily shows.',
		country: 'Azerbaijan',
		url: 'https://s14.myradiostream.com/30454/listen.mp3',
		category: 'Pop / National',
		quality: '128kbps',
		cover: './coverarts/araz-fm.png'
	}
];
