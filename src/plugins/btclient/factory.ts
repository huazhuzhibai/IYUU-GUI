import {TorrentClient, TorrentClientConfig} from "@/interfaces/BtClient/AbstractClient";
import Qbittorrent from "@/plugins/btclient/qbittorrent";
import Transmission from "@/plugins/btclient/transmission";
import Deluge from "@/plugins/btclient/deluge";

export default function (config: TorrentClientConfig): TorrentClient {
    switch (config.type) {
        case "qbittorrent":
            return new Qbittorrent(config)
        case "transmission":
            return new Transmission(config)
        case "deluge":
            return new Deluge(config)
        case "rtorrent":
            return new Qbittorrent(config)  // FIXME
    }
}