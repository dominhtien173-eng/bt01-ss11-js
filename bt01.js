
const devices = [
    {
        id: 1,
        name: "Điều hòa phòng khách",
        isActive: true,
        powerWatts: 1500
    },
    {
        id: 2,
        name: "Đèn ngủ",
        isActive: true,
        powerWatts: 10
    }
];

const findDeviceById = (devices, targetId) => {
    for (let i = 0; i < devices.length; i++) {
        if (devices[i].id === targetId) {
            return devices[i];
        }
    }

    return null;
};

const updateDevice = (devices, targetId, updatedData) => {
    const targetDevice = findDeviceById(devices, targetId);

    if (targetDevice === null) {
        return false;
    }

    if (updatedData.name !== undefined) {
        targetDevice.name = updatedData.name;
    }

    if (updatedData.isActive !== undefined) {
        targetDevice.isActive = updatedData.isActive;
    }

    if (updatedData.powerWatts !== undefined) {
        targetDevice.powerWatts = updatedData.powerWatts;
    }

    return true;
};

updateDevice(devices, 1, { isActive: false });
updateDevice(devices, 2, { powerWatts: 0 });

console.log(devices);
