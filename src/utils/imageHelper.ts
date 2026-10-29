/**
 * Safe Image URL Resolver & Robust Mobile Fallback System for Technovahubs
 * Ensures images resolve correctly on mobile devices (iOS Safari, Android Chrome),
 * desktop, Cloud Run dev servers, GitHub Pages, and production builds.
 */

// Dual-image mapping: Real hardware photography <-> 6-Panel Infographic visualizer
export const IMAGE_PAIR_MAP: Record<string, string> = {
  // Category 1: Consumer Electronics
  'real_smartphones_2026_1792833546332.jpg': 'smartphones_2026_infographic_1792829843667.jpg',
  'smartphones_2026_infographic_1792829843667.jpg': 'real_smartphones_2026_1792833546332.jpg',

  'real_anc_earbuds_1792833561359.jpg': 'earbuds_anc_infographic_1792829845391.jpg',
  'earbuds_anc_infographic_1792829845391.jpg': 'real_anc_earbuds_1792833561359.jpg',

  'real_gaming_laptop_1792833576678.jpg': 'gaming_laptops_infographic_1792829846691.jpg',
  'gaming_laptops_infographic_1792829846691.jpg': 'real_gaming_laptop_1792833576678.jpg',

  'real_smartwatch_battery_1792833591808.jpg': 'smartwatch_battery_infographic_1792829848468.jpg',
  'smartwatch_battery_infographic_1792829848468.jpg': 'real_smartwatch_battery_1792833591808.jpg',

  'real_foldable_phones_1792833606319.jpg': 'foldable_phones_infographic_1792829849592.jpg',
  'foldable_phones_infographic_1792829849592.jpg': 'real_foldable_phones_1792833606319.jpg',

  // Category 2: AI & Future Tech
  'real_generative_ai_1792833622225.jpg': 'generative_ai_infographic_1792829851167.jpg',
  'generative_ai_infographic_1792829851167.jpg': 'real_generative_ai_1792833622225.jpg',

  'real_student_apps_1792833648298.jpg': 'ai_productivity_infographic_1792829851812.jpg',
  'ai_productivity_infographic_1792829851812.jpg': 'real_student_apps_1792833648298.jpg',

  'real_commercial_drone_1792833663031.jpg': 'autonomous_drones_infographic_1792829853363.jpg',
  'autonomous_drones_infographic_1792829853363.jpg': 'real_commercial_drone_1792833663031.jpg',

  'real_ml_frameworks_1792833678276.jpg': 'ml_frameworks_infographic_1792829853513.jpg',
  'ml_frameworks_infographic_1792829853513.jpg': 'real_ml_frameworks_1792833678276.jpg',

  'real_humanoid_robot_1792833693704.jpg': 'humanoid_robotics_infographic_1792829855542.jpg',
  'humanoid_robotics_infographic_1792829855542.jpg': 'real_humanoid_robot_1792833693704.jpg',

  // Category 3: Cybersecurity & Software
  'real_vpn_privacy_1792833709206.jpg': 'privacy_vpn_infographic_1792829856482.jpg',
  'privacy_vpn_infographic_1792829856482.jpg': 'real_vpn_privacy_1792833709206.jpg',

  'real_antivirus_sec_1792833724249.jpg': 'antivirus_software_infographic_1792829857696.jpg',
  'antivirus_software_infographic_1792829857696.jpg': 'real_antivirus_sec_1792833724249.jpg',

  'real_speedup_win11_1792833739264.jpg': 'speedup_windows_infographic_1792829858444.jpg',
  'speedup_windows_infographic_1792829858444.jpg': 'real_speedup_win11_1792833739264.jpg',

  'real_pwd_manager_1792833756301.jpg': 'password_manager_infographic_1792829859650.jpg',
  'password_manager_infographic_1792829859650.jpg': 'real_pwd_manager_1792833756301.jpg',

  'real_data_privacy_1792833770493.jpg': 'data_privacy_infographic_1792829860217.jpg',
  'data_privacy_infographic_1792829860217.jpg': 'real_data_privacy_1792833770493.jpg',

  // Category 4: Smart Home & Computing Hardware
  'real_smarthome_hub_1792833785722.jpg': 'smarthome_hubs_infographic_1792829861175.jpg',
  'smarthome_hubs_infographic_1792829861175.jpg': 'real_smarthome_hub_1792833785722.jpg',

  'real_security_cam_1792833799647.jpg': 'security_cameras_infographic_1792829862465.jpg',
  'security_cameras_infographic_1792829862465.jpg': 'real_security_cam_1792833799647.jpg',

  'real_custom_pc_1792833814414.jpg': 'pc_hardware_infographic_1792829863763.jpg',
  'pc_hardware_infographic_1792829863763.jpg': 'real_custom_pc_1792833814414.jpg',

  'real_travel_router_1792833829696.jpg': 'travel_router_infographic_1792829864941.jpg',
  'travel_router_infographic_1792829864941.jpg': 'real_travel_router_1792833829696.jpg',

  'real_smart_appliances_1792833845201.jpg': 'smart_appliances_infographic_1792829864809.jpg',
  'smart_appliances_infographic_1792829864809.jpg': 'real_smart_appliances_1792833845201.jpg',
};

export const getSafeImageUrl = (rawUrl?: string): string => {
  if (!rawUrl) return '';
  if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://') || rawUrl.startsWith('data:')) {
    return rawUrl;
  }

  const filename = rawUrl.split('/').pop() || '';
  if (!filename) return rawUrl;

  // Root absolute path ensures images work from any deep path (e.g., /article/slug)
  return `/images/${filename}`;
};

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  rawUrl?: string,
  onFinalFail?: () => void
) => {
  const target = e.currentTarget;
  const currentSrc = target.src || '';
  const filename = (rawUrl || currentSrc).split('/').pop()?.split('?')[0] || '';
  if (!filename) return;

  const currentAttempt = parseInt(target.dataset.failAttempt || '0', 10);
  target.dataset.failAttempt = (currentAttempt + 1).toString();

  if (currentAttempt === 0) {
    // Attempt 1: Try partner image (infographic <-> real)
    const partner = IMAGE_PAIR_MAP[filename];
    if (partner) {
      target.src = `/images/${partner}`;
      return;
    }
  }

  if (currentAttempt <= 1) {
    // Attempt 2: Direct origin path with cache-busting timestamp
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    target.src = `${origin}/images/${filename}?v=${Date.now()}`;
    return;
  }

  if (currentAttempt <= 2) {
    // Attempt 3: Relative path fallback
    target.src = `./images/${filename}`;
    return;
  }

  // If all file attempts fail, invoke callback if provided
  if (onFinalFail) {
    onFinalFail();
  }
};
