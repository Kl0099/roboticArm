import { Vector3, Euler, Matrix4 } from "three";
export const calculateAngles = (lengths) => {
  const { lengthX, lengthY, lengthZ } = lengths;

  // Calculate the angles in radians
  const thetaX = Math.atan2(lengthY, lengthZ);
  const thetaY = Math.atan2(lengthX, lengthZ);
  const thetaZ = Math.atan2(lengthY, lengthX);

  // Convert angles from radians to degrees
  const thetaXDegrees = thetaX * (180 / Math.PI);
  const thetaYDegrees = thetaY * (180 / Math.PI);
  const thetaZDegrees = thetaZ * (180 / Math.PI);

  return { thetaXDegrees, thetaYDegrees, thetaZDegrees };
};
export const calculateLengths = (position, scale, rotation) => {
  // Apply scale to the position vector
  const scaledPosition = new Vector3().copy(position).multiply(scale);

  // Create rotation matrix from Euler angles
  const rotationMatrix = new Matrix4().makeRotationFromEuler(
    new Euler(rotation.x, rotation.y, rotation.z, rotation.order)
  );

  // Apply rotation to the scaled position
  const rotatedPosition = scaledPosition.applyMatrix4(rotationMatrix);

  // Lengths along each axis
  const lengthX = Math.abs(rotatedPosition.x);
  const lengthY = Math.abs(rotatedPosition.y);
  const lengthZ = Math.abs(rotatedPosition.z);

  return { lengthX, lengthY, lengthZ };
};

export const calculateAngleBetweenVectors = (v1, v2) => {
  const dotProduct = v1.dot(v2);
  const magnitudeV1 = v1.length();
  const magnitudeV2 = v2.length();
  const cosTheta = dotProduct / (magnitudeV1 * magnitudeV2);

  // Clamp cosTheta to the range [-1, 1] to avoid numerical issues
  const clampedCosTheta = Math.max(-1, Math.min(1, cosTheta));

  // Calculate angle in radians
  const angleInRadians = Math.acos(clampedCosTheta);

  // Convert radians to degrees
  const angleInDegrees = angleInRadians * (180 / Math.PI);

  return angleInDegrees;
};
