最近用了几年的velop2200不太稳定了，换了个velop5300，不知为何老电脑连接不上，无奈找出了一台压箱子底的极4增做二级路由带老设备。

## 获取ssh登陆权限

前置动作：

1. 准备一台电脑，最好windows 11，自带powershell，可以执行ssh、scp命令
2. 电脑通过wifi登陆路由器，或LAN连接，路由器的默认IP地址是192.168.199.1,电脑配置DHCP，获取到192.168.199.X网段的IP（以下命令基于此网段进行，如果被修改，需要替换一下所有命令的IP地址）
3. 将路由器wan口接上网络，或通过wifi桥接上网，此时电脑可以连接互联网。

操作步骤

1. 打开http://www.hiwifi.wtf/网站（希望能一直开着）
    ![image](https://github.com/user-attachments/assets/e27f6c34-89fd-474c-9eb3-78d4c5de315c)
2. 获取local_token： http://192.168.199.1/local-ssh/ 
3. 获取uuid： http://192.168.199.1/cgi-bin/turbo/proxy/router_info 
4. 把获取到的local_token和uuid填入网站对应的框中点提交
5. 提交后会生成一个cloud_token的字符串，复制后回到第二步获取local_token打开的页面
    ![image](https://github.com/user-attachments/assets/c810816f-7fb7-4a71-8e3e-db5cb7c445d6)
6. 把cloud_token填入提交按钮前面这行，点击提交
    ![image](https://github.com/user-attachments/assets/011675f0-7607-46c0-82d1-603ecb5f5663)
    
7. 如果成功，会提示开启22端口已开启，如果失败就多试几次

开启22端口只是短时的，可以使用/etc/init.d/dropbear enable命令长时间开启。

## 备份原始系统

使用终端工具直接打开192.168.199.1的22端口，例如windows 11的powershell自带的终端工具（也可以是linux的bash、putty等工具）

```bash
# 提示输入密码，这里直接输入，不会有任何提示。第一次会提示输入yes
ssh 192.168.199.1 -p 22 -l root
```

提示信息如下

```bash
root@192.168.199.1's password:

BusyBox v1.22.1 (2017-12-21 01:33:16 CST) built-in shell (ash)
Enter 'help' for a list of built-in commands.

***********************************************************
              __  __  _              _   ____  _   TM
             / / / / (_) _      __  (_) / __/ (_)
            / /_/ / / / | | /| / / / / / /_  / /
           / __  / / /  | |/ |/ / / / / __/ / /
          /_/ /_/ /_/   |__/|__/ /_/ /_/   /_/
                  http://www.hiwifi.com/
***********************************************************
root@Hiwifi:~#
```

永久开启22端口

```bash
/etc/init.d/dropbear enable
```

刷机前**备份MAC地址（重要）**

```bash
ifconfig -a
# 打印出的内容全部保存
```

备份原始固件

```bash
cat /proc/mtd
# 会看到如下信息
# mtd0: 00080000 00020000 “u-boot”
# mtd1: 00080000 00020000 “debug”
# mtd2: 00040000 00020000 “Factory”
# mtd3: 02000000 00020000"firmware"
# mtd4: 00180000 00020000 “kernel”
# mtd5: 01e80000 00020000 “rootfs”
# mtd6: 00080000 00020000"hw_panic"
# mtd7: 00080000 00020000 “bdinfo”
# mtd8: 00080000 00020000 “backup”
# mtd9: 01000000 00020000 “overlay”
# mtd10: 02000000 00020000"firmware_backup"
# mtd11: 00200000 00020000 “oem”
# mtd12: 02ac0000 00020000 “opt”
# 接下来备份原始固件
# 这里新建一个存放备份文件的目录
cd /tmp
mkdir firmwarebackup
cd firmwarebackup
#按个输入
dd if=/dev/mtd0 of=/tmp/firmwarebackup/u-boot.bin
dd if=/dev/mtd1 of=/tmp/firmwarebackup/debug.bin
dd if=/dev/mtd2 of=/tmp/firmwarebackup/Factory.bin
dd if=/dev/mtd3 of=/tmp/firmwarebackup/firmware.bin
dd if=/dev/mtd4 of=/tmp/firmwarebackup/kernel.bin
dd if=/dev/mtd5 of=/tmp/firmwarebackup/rootfs.bin
dd if=/dev/mtd6 of=/tmp/firmwarebackup/hw_panic.bin
dd if=/dev/mtd7 of=/tmp/firmwarebackup/bdinfo.bin
dd if=/dev/mtd8 of=/tmp/firmwarebackup/backup.bin
dd if=/dev/mtd9 of=/tmp/firmwarebackup/overlay.bin
dd if=/dev/mtd10 of=/tmp/firmwarebackup/firmware_backup.bin
dd if=/dev/mtd11 of=/tmp/firmwarebackup/oem.bin
dd if=/dev/mtd12 of=/tmp/firmwarebackup/opt.bin
# 接下来回到windows上的powershell（也可以是linux的bash、winscp等工具），或者退出当前界面来操作
exit
# 在powershell下，用如下命令拷贝走备份
scp -r root@192.168.199.1:/tmp/firmwarebackup ./
# 显示下面截图内容即备份成功。
# 回到前一个窗口，
ssh 192.168.199.1 -p 22 -l root
# 然后删除备份文件路径以防空间不足
cd /tmp;rm -rf firmwarebackup
# 开始刷机
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/b6460282-f530-4355-971f-53d32e2ca943/34362a06-f49e-43b6-b8df-41dcfe625f9f/Untitled.png)

```bash
root@192.168.199.1's password:
opt.bin                                                                               100% 4992KB   3.3MB/s   00:01
oem.bin                                                                               100% 2048KB   3.4MB/s   00:00
firmware_backup.bin                                                                   100%   32MB   3.4MB/s   00:09
overlay.bin                                                                           100%   16MB   3.8MB/s   00:04
backup.bin                                                                            100%  512KB   3.5MB/s   00:00
bdinfo.bin                                                                            100%  512KB   3.5MB/s   00:00
hw_panic.bin                                                                          100%  512KB   3.3MB/s   00:00
rootfs.bin                                                                            100%   31MB   3.6MB/s   00:08
kernel.bin                                                                            100% 1536KB   3.5MB/s   00:00
firmware.bin                                                                          100%   32MB   3.7MB/s   00:08
Factory.bin                                                                           100%  256KB   3.2MB/s   00:00
debug.bin                                                                             100%  512KB   3.7MB/s   00:00
u-boot.bin                                                                            100%  512KB   4.0MB/s   00:00
```

## 刷机不死Bootloader

备份完成即可刷机，需要用到之前备份好的MAC地址

1. 下载 [breed-mt7621-hiwifi-hc5962.bin](https://prod-files-secure.s3.us-west-2.amazonaws.com/b6460282-f530-4355-971f-53d32e2ca943/e1b40128-8369-446b-9b2b-12578f97d97a/breed-mt7621-hiwifi-hc5962.bin)（大小103KB，MD5：5a6f73ace7adc9580fb13e5a0094fbd0），务必确认下载来源，错了可能成砖头。
2. 用scp把breed拷贝到tmp目录下

```bash
scp .\breed-mt7621-hiwifi-hc5962.bin root@192.168.199.1:/tmp/
ssh 192.168.199.1 -p 22 -l root
md5sum /tmp/breed-mt7621-hiwifi-hc5962.bin
# 显示如下内容
# 5a6f73ace7adc9580fb13e5a0094fbd0  /tmp/breed-mt7621-hiwifi-hc5962.bin
```

1. 进行刷机

```bash
mtd unlock u-boot
mtd write /tmp/breed-mt7621-hiwifi-hc5962.bin u-boot

# 然后校验一遍
mtd verify /tmp/breed-mt7621-hiwifi-hc5962.bin u-boot
# Verifying u-boot against /tmp/breed-mt7621-hiwifi-hc5962.bin ...
# ac736f5a58c9ade75a3eb10fd0fb9400 - u-boot
# ac736f5a58c9ade75a3eb10fd0fb9400 - /tmp/breed-mt7621-hiwifi-hc5962.bin
# Success
```

1. 重启路由器

```bash
reboot
```

### 刷入Openwrt

### 刷机前准备

下载 openwrt-ramips-mt7621-hc5962-squashfs-factory(20181202).bin （18M，MD5：b8763505397d200abbbdad92e8ca786f）

### 开始刷机

1. 断开电源，按住 REST 键，不要松开，接通电源直到电源灯闪烁
2. ping 192.168.1.1 ，通了即可继续下面操作
3. 浏览器输入192.168.1.1,把之前备份好的MAC地址填入**MAC地址修改**菜单对应位置
    ![image](https://github.com/user-attachments/assets/89167f63-5212-415a-a69f-4e869ed7692f)
4. 选则固件更新菜单，在固件行点浏览，选择下载好的文件，等待进度条走完即可。
    ![image](https://github.com/user-attachments/assets/9f6b0696-7d26-4482-a0de-2065ffcde0eb)
    ![image](https://github.com/user-attachments/assets/2ae94b66-8418-46b7-96c3-06be7937ef3f)
    ![image](https://github.com/user-attachments/assets/56c8a82f-6d18-40f8-8dea-4342eb1e24e1)
    
5. 浏览器打开192.168.1.1（如果你用无线链接，重新连接OpenWrt的无线节点，密码空），使用默认管理密码：**password**（不是密码的中文解释，这就是密码）登录新的openwrt系统，enjoy！

## 附件下载

[breed-mt7621-hiwifi-hc5962.bin](https://prod-files-secure.s3.us-west-2.amazonaws.com/b6460282-f530-4355-971f-53d32e2ca943/e1b40128-8369-446b-9b2b-12578f97d97a/breed-mt7621-hiwifi-hc5962.bin)

[openwrt-ramips-mt7621-hc5962-squashfs-factory(20181202).zip.001](https://prod-files-secure.s3.us-west-2.amazonaws.com/b6460282-f530-4355-971f-53d32e2ca943/71bfd13b-f733-483d-9766-b1e3612e00c4/openwrt-ramips-mt7621-hc5962-squashfs-factory(20181202).zip.001)

[openwrt-ramips-mt7621-hc5962-squashfs-factory(20181202).zip.002](https://prod-files-secure.s3.us-west-2.amazonaws.com/b6460282-f530-4355-971f-53d32e2ca943/555d374c-37b8-45aa-8ce9-20572624ff86/openwrt-ramips-mt7621-hc5962-squashfs-factory(20181202).zip.002)

[openwrt-ramips-mt7621-hc5962-squashfs-factory(20181202).zip.003](https://prod-files-secure.s3.us-west-2.amazonaws.com/b6460282-f530-4355-971f-53d32e2ca943/2a2259cf-e4ad-4f6d-a419-cb800e4371c3/openwrt-ramips-mt7621-hc5962-squashfs-factory(20181202).zip.003)

[openwrt-ramips-mt7621-hc5962-squashfs-factory(20181202).zip.004](https://prod-files-secure.s3.us-west-2.amazonaws.com/b6460282-f530-4355-971f-53d32e2ca943/210fa97b-cc68-44fd-8a01-03e37f4aad33/openwrt-ramips-mt7621-hc5962-squashfs-factory(20181202).zip.004)

[openwrt-ramips-mt7621-hc5962-squashfs-factory(20181202).zip.005](https://prod-files-secure.s3.us-west-2.amazonaws.com/b6460282-f530-4355-971f-53d32e2ca943/d3e07a40-5dbf-4096-95fe-a556d4b683af/openwrt-ramips-mt7621-hc5962-squashfs-factory(20181202).zip.005)