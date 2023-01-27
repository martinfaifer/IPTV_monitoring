<?php

namespace App\Enums;

enum CacheKeyEnum: string
{
    case STREAMS = 'streams';
    case STREAM_TS = 'streamTS_';
    case STREAM_STATUS = 'streams_status';

    case SHOW_STREAM_INVALID_SYNC = 'showStreamInvalidSync_';
    case ERROR_STREAM_INVALID_SYNC = 'streamInvalidSync_';

    case SHOW_STREAM_TRANSPORT = 'showStreamTransportErrors_';
    case ERROR_STREAM_TRANSPORT = 'streamTransportErrors_';

    case STREAM_SERVICE = 'streamService_';
    case STREAM_PIDS = 'streamPids_';
    case STREAM_AUDIO_PIDS = 'streamAudioPids_';

    case SHOW_STREAM_AUDIO_ACCESS = 'showStreamAudioAccess_';
    case ERROR_STREAM_AUDIO_ACCESS = 'streamAudioAccess_';

    case ERROR_STREAM_AUDIO_BITRATE = 'streamAudioBitrate_';
    case STREAM_VIDEO_PIDS = 'streamVideoPids_';

    case SHOW_STREAM_VIDEO_ACCESS = 'showStreamVideoAccess_';
    case ERROR_STREAM_VIDEO_ACCESS = 'streamVideoAccess_';

    case ERROR_STREAM_VIDEO_BITRATE = 'streamVideoBitrate_';

    case SHOW_STREAM_AUDIO_VIDEO_OUT_OF_SYNC = 'showStreamAudioVideoOutOfSync_';
    case ERROR_STREAM_AUDIO_VIDEO_OUT_OF_SYNC = 'streamAudioVideoOutOfSync_';

    case STREAM_CA_PIDS = 'streamCaPids_';
    case STREAM_IS_MONITORING = 'streamIsMonitoring_';
    case STREAM_PIDS_BITRATE = 'streamPidBitrate_';
    case STREAM_ERROR_HISTORY = 'streamsErrorHistory';

    case SHOW_STREAM_DISCONTINUITY = 'showStreamDiscontinuity_';
}
