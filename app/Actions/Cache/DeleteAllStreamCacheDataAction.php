<?php

namespace App\Actions\Cache;

class DeleteAllStreamCacheDataAction
{
    public function execute(object $stream)
    {
        (new RemoveItemsFromCache())->execute('streamInvalidSync_' . $stream->id);
        (new RemoveItemsFromCache())->execute('streamTransportErrors_' . $stream->id);
        (new RemoveItemsFromCache())->execute('streamTS_' . $stream->id);
        (new RemoveItemsFromCache())->execute('streamService_' . $stream->id);
        (new RemoveItemsFromCache())->execute('streamVideoPids_' . $stream->id);
        (new RemoveItemsFromCache())->execute('streamAudioPids_' . $stream->id);
        (new RemoveItemsFromCache())->execute('streamAudioAccess_' . $stream->id);
        (new RemoveItemsFromCache())->execute('streamAudioBitrate_' . $stream->id);
        (new RemoveItemsFromCache())->execute('streamVideoAccess_' . $stream->id);
        (new RemoveItemsFromCache())->execute('streamVideoBitrate_' . $stream->id);
        (new RemoveItemsFromCache())->execute('streamCaPids_' . $stream->id);
        (new RemoveItemsFromCache())->execute('streamPids_' . $stream->id);
        (new RemoveItemsFromCache())->execute('streamFfProbeAudioPid_' . $stream->id);
        (new RemoveItemsFromCache())->execute('streamFfProbeVideoPid_' . $stream->id);
        (new RemoveItemsFromCache())->execute('streanAudioVideoOutOfSync_' . $stream->id);
    }
}
