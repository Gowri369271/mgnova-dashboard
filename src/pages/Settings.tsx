import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Save } from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    projectAlerts: true,
    weeklyReports: false,
    currency: 'USD',
  });

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <SettingsIcon className="text-primary" size={32} />
          Settings
        </h1>
        <p className="text-muted-foreground mt-1">Manage your account preferences</p>
      </div>

      <div className="max-w-2xl">
        {/* Profile Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-card border border-border rounded-lg p-6 mb-6"
        >
          <h2 className="text-xl font-bold text-foreground mb-4">Profile Settings</h2>
          <div className="space-y-4">
            {[
              { label: 'Full Name', value: 'John Doe', type: 'text' },
              { label: 'Email', value: 'john@example.com', type: 'email' },
              { label: 'Bio', value: 'Experienced web developer', type: 'textarea' },
            ].map((field, index) => (
              <motion.div
                key={field.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    defaultValue={field.value}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={3}
                  />
                ) : (
                  <input
                    type={field.type}
                    defaultValue={field.value}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-card border border-border rounded-lg p-6 mb-6"
        >
          <h2 className="text-xl font-bold text-foreground mb-4">Notifications</h2>
          <div className="space-y-3">
            {[
              { key: 'emailNotifications', label: 'Email Notifications' },
              { key: 'projectAlerts', label: 'Project Alerts' },
              { key: 'weeklyReports', label: 'Weekly Reports' },
            ].map((option) => (
              <label key={option.key} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings[option.key as keyof typeof settings] as boolean}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      [option.key]: e.target.checked,
                    })
                  }
                  className="w-4 h-4 rounded border-border"
                />
                <span className="text-foreground">{option.label}</span>
              </label>
            ))}
          </div>
        </motion.div>

        {/* General Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-card border border-border rounded-lg p-6 mb-6"
        >
          <h2 className="text-xl font-bold text-foreground mb-4">General</h2>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Currency
            </label>
            <select
              value={settings.currency}
              onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>INR</option>
            </select>
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Save size={18} />
          Save Changes
        </motion.button>
      </div>
    </motion.div>
  );
}
