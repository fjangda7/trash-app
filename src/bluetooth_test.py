import asyncio
import platform
import sys

from bleak import BleakClient, BleakScanner
from bleak.exc import BleakError

async def main(ble_address: str):

    device = await BleakScanner.find_device_by_address(ble_address, timeout=5.0)
    if not device:
        raise BleakError(f"A device with address {ble_address} could not be found.")
    async with BleakClient(device) as client:
        svcs = await client.get_services()
        print("Services:")
        for service in svcs:
            if service.uuid == "19b10000-e8f2-537e-4f6c-d104768a1214":
                byte_input = await client.read_gatt_char(service.characteristics[0])
                str_input = byte_input.decode()
                return str_input


if __name__ == "__main__":
    str_input = asyncio.run(main(ble_address="84:CC:A8:30:2B:9A"))
    print(str_input)
