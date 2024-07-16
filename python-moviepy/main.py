import os
from moviepy.config import change_settings

# Change the ImageMagick binary path here
IMAGEMAGICK_BINARY = r'C:\Program Files\ImageMagick-7.1.1-Q16-HDRI\magick.exe'

# Set the path to ImageMagick binary in MoviePy configuration
change_settings({"IMAGEMAGICK_BINARY": IMAGEMAGICK_BINARY})

# Now you can use MoviePy functionalities that require ImageMagick
from moviepy.editor import VideoFileClip, TextClip, CompositeVideoClip
from moviepy.video.tools.subtitles import SubtitlesClip
from datetime import datetime, timedelta

def animate_subtitles(subtitle_file, video_file, output_file):
    # Load video file
    video = VideoFileClip(video_file)

    # Create SubtitlesClip object
    subtitles = SubtitlesClip(subtitle_file)

    # Function to convert subtitle start time to seconds
    def convert_to_seconds(time_str):
        h, m, s = map(float, time_str.replace(',', '.').split(':'))
        return timedelta(hours=h, minutes=m, seconds=s).total_seconds()

    # Loop through subtitles and add TextClip with appropriate timing
    clips = []
    for sub in subtitles:
        start_time = convert_to_seconds(sub.start)
        end_time = convert_to_seconds(sub.end)
        duration = end_time - start_time
        
        # Create TextClip for each subtitle
        txt_clip = TextClip(sub.text, fontsize=24, color='white', font='Arial', method='caption')
        txt_clip = txt_clip.set_position(('center', 'bottom')).set_start(start_time).set_duration(duration)
        clips.append(txt_clip)

    # Composite video with subtitles
    final_video = CompositeVideoClip([video] + clips)

    # Write the final video file
    final_video.write_videofile(output_file, codec='libx264', audio_codec='aac')

# Replace these with your actual file paths
subtitle_file = 'output_audio.srt'
video_file = 'without-captions.mp4'
output_file = 'output_video.mp4'

# Call the function to animate subtitles
animate_subtitles(subtitle_file, video_file, output_file)
