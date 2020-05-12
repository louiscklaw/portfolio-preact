https://gist.github.com/rikka0w0/f56977f81d1228fc503b00ad7b526aa7

在启动到内核前，回车进入 uboot，执行 sf probe 0;sf erase 0 0x100000;reset 即可重新进入 fel 模式

若 flash 中已有系统，可通过：

短接 flash 的 1、4 两脚，重新上电，上电后松开短接，即可重新进入 fel 模式，进行再次下载

sudo sunxi-fel -p spiflash-write 0 Your-Flash-BIN

ifconfig wlan0 192.168.99.131
route add default gw 192.168.99.1 dev wlan0

wpa_supplicant -B -i wlan0 -c /etc/my_wpa_supplicant.conf

cd /etc/network/
vi interfaces

auto wlan0
iface wlan0 inet static
address 192.168.99.254
netmask 255.255.255.0
gateway 192.168.99.1
wpa-ssid logicdebug
wpa-psk 1233211234567

modprobe esp8089.ko config=crystal_26M_en=1
modprobe esp8089.ko config=crystal_26M_en=2

https://www.lotlab.org/2019/01/18/%E4%B8%BA%E8%8D%94%E6%9E%9D%E6%B4%BEnano%E7%BC%96%E8%AF%91esp8089-wifi-%E9%A9%B1%E5%8A%A8/

wpa_cli status 查看网络状态
pacman -S wireless_tools madwifi 安装 wifi 管理工具 默认已安装
lsusb 查看 usb 网卡状态
iwconfig 查看网卡
ifconfig wlan0 up 激活网卡
iwlist wlan0 scan 扫描网网络

ifconfig -a //查看所有网卡
ifconfig //查看已打开网卡
ifconfig wlan0 down //关闭对应网卡
————————————————
版权声明：本文为 CSDN 博主「懒人在行动」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/xinxiaoci/article/details/78192421

repo:
git@github.com:louiscklaw/lichee-nano-one-key-package.git
