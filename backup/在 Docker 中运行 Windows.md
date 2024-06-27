![](https://github.com/dockur/windows/raw/master/.github/logo.png)
### 安装

使用 [dockur/windows](https://github.com/dockur/windows) 实现，特点：

- Multi-language
- ISO downloader
- KVM acceleration
- Web-based viewer

一条命令即可，但需要分配 2 个 CPU 核心、4 GB 内存和64GB 硬盘，默认安装Windows 11。
``` shell
sudo docker run -it --rm -p 8006:8006 --device=/dev/kvm --cap-add NET_ADMIN --stop-timeout 120 dockur/windows
```

如果要安装其他系统，只需要在命令中添加 <code>-e win10</code> 即可：

Value | Version | Size
-- | -- | --
win11 | Windows 11 Pro | 6.4 GB
win11e | Windows 11 Enterprise | 5.8 GB
win10 | Windows 10 Pro | 5.7 GB
ltsc10 | Windows 10 LTSC | 4.6 GB
win10e | Windows 10 Enterprise | 5.2 GB
win8 | Windows 8.1 Pro | 4.0 GB
win8e | Windows 8.1 Enterprise | 3.7 GB
win7 | Windows 7 Enterprise | 3.0 GB
vista | Windows Vista Enterprise | 3.0 GB
winxp | Windows XP Professional | 0.6 GB
2022 | Windows Server 2022 | 4.7 GB
2019 | Windows Server 2019 | 5.3 GB
2016 | Windows Server 2016 | 6.5 GB
2012 | Windows Server 2012 | 4.3 GB
2008 | Windows Server 2008 | 3.0 GB
core11 | Tiny 11 Core | 2.1 GB
tiny11 | Tiny 11 | 3.8 GB
tiny10 | Tiny 10 | 3.6 GB


镜像下载很慢你可使用自己的系统镜像：
``` shell
-e VERSION: "https://example.com/win.iso"
```

也可以使用本地镜像：重命名 custom.iso 并将其放入空的 <code>/storage</code> 文件夹中以跳过下载。
调整内存、硬盘大小：
```shell
-e RAM_SIZE: "1G" -e DISK_SIZE: "20G"
```
实测启动命令和实际有些出入，在docker version 26.1.3中测试，先pull镜像，然后import后执行下面的操作
启动win7的完整的命令
```shell
cinzy@ubuntu20_04:~$ sudo docker run -it --rm -p 8006:8006 --device=/dev/kvm --cap-add NET_ADMIN --stop-timeout 120 -e VERSION=win7 -e RAM_SIZE=1G  dockur/windows
❯ Starting Windows for Docker v3.12...
❯ For support visit https://github.com/dockur/windows
❯ CPU: Intel Core TM i5 8250U CPU | RAM: 2/4 GB | DISK: 183 GB (ext4) | HOST: 5.15.146.1-microsoft-standard-WSL2...

❯ Downloading Windows 7 from bobpony.com...
❯ ERROR: Failed to download https://dl.bobpony.com/windows/7/en_windows_7_enterprise_with_sp1_x64_dvd_u_677651.iso , server issued an error response!
❯ Failed to download Windows 7, will try another mirror now...
❯ Downloading Windows 7 from files.dog...
/storage/tmp/win7x64.iso    22%[========>                                ] 696.08M  1007KB/s    eta 26m 54s
```

## **使用**

浏览器打开 IP:8006
![](https://cinzy.github.io/picx-images-hosting/85478c0057e7084541b8d767f2c4c7ea.3k7vmw2ku8.png)