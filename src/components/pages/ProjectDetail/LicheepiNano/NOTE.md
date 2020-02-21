https://gist.github.com/rikka0w0/f56977f81d1228fc503b00ad7b526aa7

在启动到内核前，回车进入uboot，执行 sf probe 0;sf erase 0 0x100000;reset即可重新进入fel模式


若flash中已有系统，可通过：

短接flash的 1、4 两脚，重新上电，上电后松开短接，即可重新进入fel模式，进行再次下载


sudo sunxi-fel -p spiflash-write 0 Your-Flash-BIN
